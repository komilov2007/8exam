import { api } from '@/lib/axios';
const getUserIdOrSession = () => {
  let userId: number | null = null;
  let sessionId = '';
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        userId = Number(parsedUser?.id) || null;
      } catch (error) {
        userId = null;
      }
    }
    sessionId = localStorage.getItem('sessionId') || '';
    if (!sessionId) {
      sessionId =
        crypto.randomUUID?.() ||
        `session_${Date.now()}_${Math.random().toString(36).slice(2)}`;

      localStorage.setItem('sessionId', sessionId);
    }
  }

  return { userId, sessionId };
};
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
export const getProducts = async () => {
  const res = await api.get('/products');
  return res.data;
};
export const getCategories = async () => {
  const res = await api.get('/categories');
  return res.data;
};
export const getNews = async () => {
  const res = await api.get('/news');
  return res.data;
};
export const getGalleries = async () => {
  const res = await api.get('/galleries');
  return res.data;
};
export const addToCart = async (productId: number, quantity: number = 1) => {
  try {
    if (!productId || Number.isNaN(productId)) {
      return {
        ok: false,
        message: 'productId noto‘g‘ri',
      };
    }
    const { userId, sessionId } = getUserIdOrSession();
    const payload: {
      userId?: number;
      sessionId?: string;
      productId: number;
      quantity: number;
    } = {
      productId: Number(productId),
      quantity: Number(quantity),
    };
    if (userId) {
      payload.userId = userId;
    } else {
      payload.sessionId = sessionId;
    }
    const res = await api.post('/cart/items', payload);
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
  const { userId, sessionId } = getUserIdOrSession();
  const params: {
    userId?: number;
    sessionId?: string;
  } = {};
  if (userId) {
    params.userId = userId;
  } else {
    params.sessionId = sessionId;
  }
  const res = await api.get('/cart/current', { params });
  return res.data;
};
export const checkoutCart = async () => {
  const { userId, sessionId } = getUserIdOrSession();
  const payload: {
    userId?: number;
    sessionId?: string;
  } = {};
  if (userId) {
    payload.userId = userId;
  } else {
    payload.sessionId = sessionId;
  }
  const res = await api.post('/cart/checkout', payload);
  return res.data;
};
export const deleteCartItem = async (productId: number) => {
  const res = await api.delete(`/cart/item/${productId}`);
  return res.data;
};
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
export const sendContactMessage = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const res = await api.post('/contact', data);
  return res.data;
};
export const getOneProduct = async (id: string | number) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

// // users
// export const getAllUsers = async () => {
//   const res = await api.get('/user');
//   return res.data;
// };

// menu/products
export const getAdminProducts = async () => {
  const res = await api.get('/products');
  return res.data;
};

// export const createAdminProduct = async (data: any) => {
//   const res = await api.post('/products', data);
//   return res.data;
// };

export const deleteAdminProduct = async (id: number) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};

// category
export const getAdminCategories = async () => {
  const res = await api.get('/categories');
  return res.data;
};

// news
export const getAdminNews = async () => {
  const res = await api.get('/news');
  return res.data;
};

// reservation
export const getAdminReservations = async () => {
  const res = await api.get('/reservation');
  return res.data;
};

// contact
export const getAdminContacts = async () => {
  const res = await api.get('/contact');
  return res.data;
};

export const createAdminProduct = async (data: {
  name: string;
  description?: string;
  price: number;
  categoryId?: number;
  image?: File | null;
}) => {
  const formData = new FormData();

  formData.append('name', data.name);
  formData.append('price', String(data.price));

  if (data.description) {
    formData.append('description', data.description);
  }

  if (data.categoryId) {
    formData.append('categoryId', String(data.categoryId));
  }

  if (data.image) {
    formData.append('image', data.image);
  }

  const res = await api.post('/products', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};
