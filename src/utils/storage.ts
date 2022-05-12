interface StorageData<T = any> {
  // 存储的值
  value: T;
  // 是否永久有效
  permanent: boolean;
  // 设置的时间
  time: number;
  // 过期时间
  expire?: number;
}

export class StorageUtils {
  /**
   * 对原生 localStorage.getItem 拓展了过期时间功能 并添加泛型支持
   * @param key key
   * @param defaultVal 不存在时返回默认值
   */
  static get<T = any>(key: string, defaultVal?: T): T | undefined {
    const rawData = localStorage.getItem(key);

    // 不存在时返回默认值
    if (!rawData) return defaultVal;

    // 存在时解析得到 StorageData 包装对象
    const data = JSON.parse(rawData) as StorageData<T>;

    if (!data.permanent) {
      // 不是永久时需要判断是否过期
      if (Date.now() >= data.time + data.expire!) {
        // 过期 -- 删除后返回 defaultVal
        StorageUtils.remove(key);

        return defaultVal;
      } else {
        // 未过期
        return data.value;
      }
    } else {
      // 永久有效
      return data.value;
    }
  }

  static set<T = any>(key: string, value: T, expire?: number) {
    const data: StorageData<T> = {
      value,
      // 默认永久有效
      permanent: expire !== undefined ? false : true,
      // 存储的时间
      time: Date.now(),
      expire,
    };

    localStorage.setItem(key, JSON.stringify(data));
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}
