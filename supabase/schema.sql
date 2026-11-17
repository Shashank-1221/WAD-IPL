create table if not exists public.ipl_bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  teams text not null,
  match_date text not null,
  venue text not null,
  name text not null check (char_length(btrim(name)) > 0),
  email text not null,
  mobile text not null,
  stand text not null,
  ticket_count smallint not null check (ticket_count between 1 and 10),
  unit_price integer not null check (unit_price in (1200, 2500, 5000, 12000)),
  total_price integer generated always as (ticket_count * unit_price) stored,
  created_at timestamptz not null default now()
);

create index if not exists ipl_bookings_user_created_at_idx
  on public.ipl_bookings (user_id, created_at desc);

alter table public.ipl_bookings enable row level security;

create policy "Users can view their own IPL bookings"
  on public.ipl_bookings
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can create their own IPL bookings"
  on public.ipl_bookings
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

revoke all on public.ipl_bookings from anon, public;
grant select, insert on public.ipl_bookings to authenticated;
