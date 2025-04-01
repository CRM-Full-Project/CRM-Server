
export const apiResponseDto = ({code = 1000,message,result}) => ({
    code: code,
    message: message,
    result: result
  });