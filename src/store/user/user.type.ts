export type CurrentUser = {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  providerId: string;
  uid: string;
  isSignedIn: boolean;
};
