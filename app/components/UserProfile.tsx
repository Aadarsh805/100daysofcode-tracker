import Image from "next/image";
import { FC, useState } from "react";
import fallbackImage from "public/assets/fallback.jpg";

type UserProfileProps = {
  userProfile: any;
};

const UserProfile: FC<UserProfileProps> = ({ userProfile }) => {
  const [count, setCount] = useState<number>(1);

  return (
    <div className="flex items-center gap-2 ">
      <div className="relative">
        <Image
          alt={`${userProfile?.name}'s profile image`}
          src={userProfile ? userProfile?.profile_img : fallbackImage}
          width={200}
          height={200}
          className="rounded-full w-12 aspect-square object-cover"
        />
        <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-ourPink text-white text-xs font-medium">
          {count}
        </span>
      </div>
      <div className="flex flex-col">
        <p className="text-ourDarkGray text-lg font-semibold">
          {userProfile?.name}
        </p>
        <p className="text-ourDarkGray opacity-90 text-sm">
          @{userProfile?.username}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
