// 获取宽度
export function getWidth(width: unknown) {
    if (typeof width === 'string' || typeof width === 'number') {
      return { width };
    }
  
    return {};
  }
  