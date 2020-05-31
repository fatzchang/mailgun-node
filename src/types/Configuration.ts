export interface BaseConfiguration {
  from: string;
  to: string;
  bcc?: string;
  subject: string;
}

export interface HtmlContentConfiguration extends BaseConfiguration {
  html: string;
}

export interface TextContentConfiguration extends BaseConfiguration {
  text: string;
}

export type Configuration = HtmlContentConfiguration | TextContentConfiguration;