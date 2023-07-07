export interface Email {
  _id: string;
  title: string;
  group: string;
  template: string;
  organisation: string;
}

export interface NewEmail {
  title: string | null;
  group: string | null;
  template: string | null;
  organisation: string | null;
}

export interface EmailSerializedById {
  [key: string]: {
    _id: string;
    title: string;
    group: string;
    template: string;
    organisation: string;
  };
}
