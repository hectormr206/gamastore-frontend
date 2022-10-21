// next
import { useSession } from 'next-auth/react';

const useUser = () => {
  const { data: session } = useSession();
  if (session) {
    console.log('session', session);

    const user = session?.user;
    let thumb = user?.image;

    if (!user?.image) {
      user.image = '/assets/images/users/avatar-1.png';
      thumb = '/assets/images/users/avatar-thumb-1.png';
    }

    const newUser = {
      name: user.name,
      email: user.email,
      avatar: user?.image,
      thumb,
      role: 'UI/UX Designer'
    };

    return newUser;
  }
  return false;
};

export default useUser;
