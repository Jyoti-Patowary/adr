import { Poppins } from "next/font/google";
import {Comforter} from "next/font/google";


const poppins_font = Poppins({ weight: '400', subsets: ["latin"] });
const comforter_font = Comforter({ weight: '400', subsets: ["latin"] });

export const poppins = poppins_font.className;

export const comforter = comforter_font.className;
