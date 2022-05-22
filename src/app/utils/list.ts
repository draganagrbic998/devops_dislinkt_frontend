export interface ListConfig {
    title: string;
    serviceName: string;
    methodName: string;
    hiddenFields?: string[];
    buttons?: ButtonConfig[];
}

export interface ButtonConfig {
    name: string;
    hidden: (item: any) => boolean;
    click: (item: any) => Promise<void>;
}
