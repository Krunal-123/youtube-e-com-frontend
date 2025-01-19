import * as React from 'react';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreIcon from '@mui/icons-material/MoreVert';
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function PrimarySearchAppBar() {
    const menuId = 'primary-search-account-menu';

    return (
        <>
            <div className="flex-grow w-full shadow-2xl sticky-top">
                <div className="bg-white text-black">
                    <div className="flex items-center px-3 py-2">
                        <img
                            alt="Remy Sharp"
                            src="https://img.icons8.com/?size=100&id=44112&format=png&color=000000"
                            className="w-14 h-14 rounded-full"
                        />

                        {/* SEARCH BAR APP */}
                        <div className="relative md:hidden ml-1">
                            <SearchIcon className="absolute left-2 top-2" />
                            <input
                                type="text"
                                placeholder="Search...."
                                className="pl-10 py-2 border border-dark rounded-lg w-[130px]"
                                aria-label="search"
                            />
                        </div>

                        <div className="flex-grow hidden md:flex ml-4">
                            <Link to="#">
                                <button className="my-2 block mx-2 bg-clip-text text-lg font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Home</button>
                            </Link>

                            {/* Categories */}
                            <Link>
                                <button className="my-2  block mx-2 bg-clip-text text-lg font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Categoires</button>
                            </Link>

                            <Link to="#">
                                <button className="my-2  block mx-2 bg-clip-text text-lg font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">About Us</button>
                            </Link>

                            <Link to="#">
                                <button className="my-2  block mx-2 bg-clip-text text-lg font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Contact Us</button>
                            </Link>
                        </div>

                        <div className="flex-grow" />
                        <div className="hidden md:flex items-center">

                            {/* SEARCH BAR */}
                            <div className="relative mx-2">
                                <SearchIcon className="absolute left-2 top-2" />
                                <input
                                    type="text"
                                    placeholder="Search...."
                                    className="pl-10 pr-4 py-2 border border-dark rounded-lg"
                                    aria-label="search"
                                />
                            </div>

                            {/*///// DIVISION ///*/}

                            {/* ##-USER NAME-## */}
                            <div className="m-2 font-bold rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[3px]">
                                <div className='h-full w-full bg-light rounded-sm p-1'>
                                    <i className='bg-clip-text text-lg font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                        HELLO, ----
                                    </i>
                                    {/* <Spinner className='ml-2' /> */}
                                </div>
                            </div>


                            {/* PROFILE IMG */}
                            <button
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                            >
                                <img src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png" className={`w-[35px] h-[35px] rounded-full m-2`} />
                            </button>

                            {/* FAV ICON */}
                            <Link to={'#'}>
                                <button className="text-xl ml-2 mx-2">
                                    <Badge badgeContent={0} color="error">
                                        <FavoriteBorderIcon />
                                    </Badge>
                                </button>
                            </Link>

                            {/* ADDCART ICON */}
                            <Link to={"#"}>
                                <button className="text-2xl mx-2 me-3 mb-1">
                                    <Badge badgeContent={0} color="error">
                                        <AiOutlineShoppingCart />
                                    </Badge>
                                </button>
                            </Link>
                        </div>



                        {/* modile app render */}
                        <div className="flex">
                            <div className='md:hidden'>
                                {/* PROFILE IMG APP */}
                                <button>
                                    <img src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png" className={`d-inline w-[35px] h-[35px] mb-2 rounded-full`} />
                                </button>


                                {/* FAV ICON APP*/}
                                <Link to={'#'}>
                                    <button className=" mx-2">
                                        <Badge badgeContent={0} color="error">
                                            <FavoriteBorderIcon />
                                        </Badge>
                                    </button>
                                </Link>


                                {/* ADDCART ICON APP*/}
                                <Link to={"#"}>
                                    <button className="text-2xl mx-2 me-3">
                                        <Badge badgeContent={0} color="error">
                                            <AiOutlineShoppingCart />
                                        </Badge>
                                    </button>
                                </Link>

                                {/* Catogories  APP*/}
                                <button>
                                    <MoreIcon className="text-black" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}