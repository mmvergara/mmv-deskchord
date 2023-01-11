-- Create a table for public profiles
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  avatar_url text,
  constraint username_length check (char_length(username) >= 3)
);

alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);
create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);
create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);


create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id,username)
  values (new.id,new.email);
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

insert into storage.buckets (id, name)
  values ('avatars', 'avatars');







CREATE TABLE servers (
    id uuid PRIMARY KEY,
    server_name text NOT NULL,
    server_logo_url text NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    server_author_id uuid NOT NULL REFERENCES profiles(id)
);

CREATE TABLE categories (
    id uuid PRIMARY KEY,
    server_id uuid NOT NULL REFERENCES servers(id),
    categorie_name text NOT NULL
);

CREATE TABLE channels (
    id uuid PRIMARY KEY,
    category_id uuid NOT NULL REFERENCES categories(id),
    channel_name text NOT NULL
);

CREATE TABLE messages (
    id uuid PRIMARY KEY,
    channel_id uuid NOT NULL REFERENCES channels(id),
    message_author_id INTEGER NOT NULL,
    content text NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_categories_server_id ON categories (server_id);
CREATE INDEX idx_channels_category_id ON channels (category_id);
CREATE INDEX idx_messages_channel_id ON messages (channel_id);