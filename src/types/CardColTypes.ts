export interface CardColProps {
  title: string;
  imgUrl: string;
}

export interface SrvCardProps {
  title: string;
  img: {
    src: string;
    alt: string;
  };
  serviceList: string[];
  btnTitle: string;
}
