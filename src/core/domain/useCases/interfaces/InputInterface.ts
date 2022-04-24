export interface UseCaseInput<IRequest, IResponse> {
    execute(request?: IRequest): Promise<IResponse> | IResponse;
}
