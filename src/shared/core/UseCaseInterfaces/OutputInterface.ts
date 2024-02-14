interface GenericResponse {
    success: boolean;
    message: string;
}

export type OutputInterface = Error | Promise<GenericResponse | any> | any;
