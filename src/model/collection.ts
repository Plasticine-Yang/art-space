export interface ICollection {
  id: number;
  shopName: string;
  shopPrice: number;
  shopDec: string;
  shopTypeId: number;
  shopCoverImage: string;
  shopStock: number;
  shopLink: string;
  buyLimit: number;
  sellTime: string;
  shopType: IShopType;
  shopTypeTag: string[];
  shopCoverImages: string | null;
  shopImages: string | null;
}

interface IShopType {
  id: number;
  typeName: string;
}
