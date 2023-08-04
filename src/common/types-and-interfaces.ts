export interface BasketCardProps {
    index:number;
    id:number;
    title:string;
    price:number;
}

export interface BasketIconProps {
    setShow:(value:boolean)=>void;
  }

export interface ModalBasketProps {
    show:boolean;
    setShow:(value:boolean)=>void;
}

export interface OneCardProps {
    title:string,
    picture:string,
    price:number,
    id:number,
}

export interface DropDownMenuProps{
    setTest:(value:boolean)=>void;
}