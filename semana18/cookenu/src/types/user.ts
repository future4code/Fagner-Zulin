export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
}

export interface UserFollow {
  follower_id: string;
  followed_id: string;
}
