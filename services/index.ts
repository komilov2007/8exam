import { api } from '@/lib/axios';

// ================= AUTH =================

export const signInUser = async (data: {
  username: string;
  password: string;
}) => {
  const res = await api.post('/auth/signin', data);
  return res.data;
};

export const signUpUser = async (data: {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}) => {
  const res = await api.post('/auth/signup', data);
  return res.data;
};

// ================= PRODUCTS =================

export const getProducts = async () => {
  const res = await api.get('/products');
  return res.data;
};

// ================= CATEGORIES =================

export const getCategories = async () => {
  const res = await api.get('/categories');
  return res.data;
};

// ================= NEWS =================

export const getNews = async () => {
  const res = await api.get('/news');
  return res.data;
};

// ================= GALLERIES =================

export const getGalleries = async () => {
  const res = await api.get('/galleries');
  return res.data;
};

// ================= CART =================

export const addToCart = async (productId: number, quantity: number = 1) => {
  try {
    if (!productId || Number.isNaN(productId)) {
      return {
        ok: false,
        message: 'productId noto‘g‘ri',
      };
    }

    let sessionId = '';

    if (typeof window !== 'undefined') {
      sessionId = localStorage.getItem('sessionId') || '';

      if (!sessionId) {
        sessionId =
          crypto.randomUUID?.() ||
          `session_${Date.now()}_${Math.random().toString(36).slice(2)}`;

        localStorage.setItem('sessionId', sessionId);
      }
    }

    const res = await api.post('/cart/items', {
      productId: Number(productId),
      quantity: Number(quantity),
      sessionId,
    });

    return {
      ok: true,
      data: res.data,
    };
  } catch (error: any) {
    return {
      ok: false,
      message:
        error?.response?.data?.message || 'Savatchaga qo‘shishda xatolik',
    };
  }
};

export const getCurrentCart = async () => {
  let sessionId = '';

  if (typeof window !== 'undefined') {
    sessionId = localStorage.getItem('sessionId') || '';
  }

  const res = await api.get('/cart', {
    params: sessionId ? { sessionId } : {},
  });

  return res.data;
};

export const checkoutCart = async () => {
  let sessionId = '';

  if (typeof window !== 'undefined') {
    sessionId = localStorage.getItem('sessionId') || '';
  }

  const res = await api.post('/cart/checkout', {
    sessionId,
  });

  return res.data;
};

// ================= LIKES =================

export const getLikedProducts = (): number[] => {
  if (typeof window === 'undefined') return [];

  const liked = localStorage.getItem('likedProducts');
  return liked ? JSON.parse(liked) : [];
};

export const isProductLiked = (productId: number) => {
  const liked = getLikedProducts();
  return liked.includes(productId);
};

export const toggleLikeProduct = (productId: number) => {
  const liked = getLikedProducts();

  let updated: number[] = [];

  if (liked.includes(productId)) {
    updated = liked.filter((id) => id !== productId);
  } else {
    updated = [...liked, productId];
  }

  localStorage.setItem('likedProducts', JSON.stringify(updated));

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('likes-updated'));
  }

  return updated;
};

export const getLikedCount = () => {
  return getLikedProducts().length;
};

export const getLikedProductsFull = async () => {
  const likedIds = getLikedProducts();

  if (!likedIds.length) return [];

  const res = await api.get('/products');
  const products = Array.isArray(res?.data?.data)
    ? res.data.data
    : Array.isArray(res?.data)
      ? res.data
      : [];

  return products.filter((item: any) => likedIds.includes(Number(item.id)));
};
