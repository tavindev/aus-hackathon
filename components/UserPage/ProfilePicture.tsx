import Image from 'next/image';

export const ProfilePicture: React.FC = () => {
  return (
    <div className="relative bg-grey-50 rounded-full w-28 aspect-w-1 aspect-h-1">
      <Image src="/undraw_profile_pic.svg" layout="fill" />
    </div>
  );
};
