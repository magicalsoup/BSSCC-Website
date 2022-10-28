import { FaPencilAlt } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";

export default function Hamburger() {
  const links: [string, string, JSX.Element][] = [
    ["Home" ,"/", <BiHomeAlt />],
    ["About", "/about", <AiOutlineTeam />],
    ["Blog", "/blog", <FaPencilAlt />],
    ["Resources", "/resources", <BsFillJournalBookmarkFill />],
  ];
  return (
    <div className="hamburger flex">
      <input className="checkbox" type="checkbox" id="checkbox" />
      <label className="checkbox-label" htmlFor="checkbox">
        <svg className="ham ham-rotate" viewBox="0 0 100 100" width="60">
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </label>
      <div className="drawer prose dark:prose-invert">
        {links.map((item, index) => (
          <li className="m-0" key={index}>
            <a
              href={item[1]}
              className="p-2 flex gap-3 items-center font-raleway font-bold text-lg"
            >
              {item[2]}
              {item[0]}
            </a>
            {index !== links.length - 1 ? <hr className="m-2" /> : null}
          </li>
        ))}
      </div>
      <style jsx>
        {`
          .hamburger {
            --trans: 0.2s ease;
          }
          input.checkbox {
            outline: none;
            width: 0;
            opacity: 0;
            height: 0;
          }

          input.checkbox ~ .drawer {
            opacity: 0;
            right: 0;
            top: 0;
            position: absolute;
            transform: scale(0);
          }

          input.checkbox:checked ~ .drawer,
          .drawer:hover {
            opacity: 1;
            transform: scale(1) translate(-0.5rem, 4.25rem);
          }

          .drawer {
            transition: transform var(--trans), opacity var(--trans),
              border var(--trans), background var(--trans);
            padding: 0.8rem;
            right: 0;
            background: var(--drawer-bg);
            border: 1px solid var(--drawer-border-bg);
            display: flex;
            flex-direction: column;
            align-items: center;
            /*border-radius: 0.5rem;*/
            width: 12rem;

            --drawer-drop-color: gray;
            box-shadow: 0 0.25rem 0.5rem 0 var(--drawer-drop-color);
            --drawer-bg: #394555;
            --drawer-border-bg: darkslategray;
            --drawer-drop-color: #222;
          }

          .drawer::before {
            content: "";
            width: 0;
            height: 0;
            position: absolute;

            --tri-size: 0.6rem;
            border-left: var(--tri-size) solid transparent;
            border-right: var(--tri-size) solid transparent;
            border-bottom: var(--tri-size) solid var(--drawer-border-bg);
            right: 1.75rem;
            top: calc(-1 * var(--tri-size));
            transition: border var(--trans);
          }

          .drawer::after {
            content: "";
            width: 0;
            height: 0;
            position: absolute;

            --tri-size: 0.56rem;
            border-left: var(--tri-size) solid transparent;
            border-right: var(--tri-size) solid transparent;
            border-bottom: var(--tri-size) solid var(--drawer-bg);
            right: 1.8rem;
            top: -0.53rem; /*calc(-1 * var(--tri-size));*/
            transition: border var(--trans);
          }

          .drawer li {
            list-style: none;
            width: 100%;
          }

          .drawer li a {
            /* overwrite tailwind */
            text-decoration: none;
            border-radius: 0.5rem;
            width: 100%;
            color: white;
          }

          .drawer li a:hover,
          .drawer li a:active {
            --drawer-active-color: #0f172a;
            background: var(--drawer-active-color);
          }

          .drawer li a {
            --drawer-active-color: darkslategray;
          }

          /* hamburger animation */

          .ham {
            cursor: pointer;
            transition: transform 400ms;
            user-select: none;
            height: 3.75rem;
          }

          .line {
            fill: none;
            transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
            stroke: #fff;
            stroke-width: 5.5;
            stroke-linecap: round;
          }

          .ham .top {
            stroke-dasharray: 40 139;
          }
          .ham .bottom {
            stroke-dasharray: 40 180;
          }
          input.checkbox:checked ~ label.checkbox-label .ham .top {
            stroke-dashoffset: -98px;
          }
          input.checkbox:checked ~ label.checkbox-label .ham .bottom {
            stroke-dashoffset: -138px;
          }

          input.checkbox:checked ~ label.checkbox-label .ham-rotate {
            transform: rotate(45deg);
          }
        `}
      </style>
    </div>
  );
}
