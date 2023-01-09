export const JSON_API_CALL_INIT = 'JSON_API_CALL_INIT';
export const JSON_API_CALL = 'JSON_API_CALL';

export interface APICallCount {
  count: number;
  url: string;
}

export interface APICallCountAction {
  type: string;
  payload: APICallCount;
}

export const JsonApiCallReducer = (state: APICallCount | null = null, action: APICallCountAction): APICallCount | null => {
  switch (action.type) {
    case JSON_API_CALL_INIT:
      return {
        count: 0,
        url: 'empty'
      }
    case JSON_API_CALL:
      return {
        count: state ? state.count + 1 : 0,
        url: action.payload.url,
      }
    default:
      return state;
  }
};