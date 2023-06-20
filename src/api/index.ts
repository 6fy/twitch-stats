import { bringDate } from '@/types';

const header = {
  'Client-ID': `${process.env.CLIENT_ID}`,
  Authorization: 'Bearer ' + `${process.env.AUTHORIZATION_TOKEN}`,
};

export const getUserData = async (username: string) => {
  const res = await fetch(
    `${process.env.API_URL}` + '/helix/users?login=' + username,
    {
      method: 'GET',
      headers: header,
    }
  );

  return res.json();
};

export const getTopStreamersList = async () => {
  const res = await fetch(`${process.env.API_URL}` + '/helix/streams', {
    method: 'GET',
    headers: header,
  });

  return res.json();
};

export const getTopClipsToDay = async (yesterDay: Date) => {
  const res = await fetch(
    `${
      process.env.API_URL
    }/helix/clips?game_id=509658&started_at=${yesterDay.toISOString()}`,
    {
      method: 'GET',
      headers: header,
    }
  );

  return res.json();
};

export const getTopClipsWeek = async (week: bringDate) => {
  const res = await fetch(
    `${
      process.env.API_URL
    }/helix/clips?game_id=509658&started_at=${week.startDay.toISOString()}&ended_at=${week.endDay.toISOString()}`,
    {
      method: 'GET',
      headers: header,
    }
  );

  return res.json();
};

export const getTopClipsMonth = async (month: bringDate) => {
  const res = await fetch(
    `${
      process.env.API_URL
    }/helix/clips?game_id=509658&started_at=${month.startDay.toISOString()}&ended_at=${month.endDay.toISOString()}`,
    {
      method: 'GET',
      headers: header,
    }
  );

  return res.json();
};

export const getClipById = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/helix/clips?id=${id}`, {
    method: 'GET',
    headers: header,
  });

  return res.json();
};

export const getClipsByBroadcasterId = async (broadcasterId: string) => {
  const res = await fetch(
    `${process.env.API_URL}/helix/clips?broadcaster_id=${broadcasterId}`,
    {
      method: 'GET',
      headers: header,
    }
  );

  return res.json();
};
