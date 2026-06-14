import { IoBag } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
export const cat1=[
    {
                icon:<IoBag size={20}/>,
        title:'work',
        num:'3',
        status1:'0 done',
        status2:'1 active',
        status3:'1 pending',
        color:'blue'

    },
     {
                icon:<IoIosPeople size={20}/>,
        title:'personal',
        num:'1',
        status1:'1 done',
        status2:'0 active',
        status3:'0 pending',
        color:'green'

    },
     {
                icon:<FaHeart size={20}/>,
        title:'Health',
        num:'1',
        status1:'0 done',
        status2:'0 active',
        status3:'1 pending',
        color:'yellow'

    },
    {
                icon:<RiMoneyPoundCircleFill size={20}/>,
        title:'Finance',
        num:'1',
        status1:'0 done',
        status2:'0 active',
        status3:'1 pending',
        color:'red'

    },
     {
                icon:<HiOutlineDotsHorizontal size={20}/>,
        title:'other',
        num:'0',
        status1:'0 done',
        status2:'0 active',
        status3:'0 pending',
        color:'gray'

    }
]