import Social from "@components/Social";
import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

const Footer = ({blok}) => {
  const { footer } = menu;
  console.log(blok);
  return (
    <footer className="section bg-theme-light pb-0"  {...storyblokEditable(blok)}>
      <div className="container">
        {/* footer menu */}
        <div className="row">
          {blok?.sectionOne &&
            <div className="mb-12 sm:col-6 lg:col-3">
                <h4>{blok?.sectionOne}</h4>
                <ul className="mt-6">
                  {blok?.linksOne.map((item) => (
                    <li className="mb-1" key={item.link.title}>
                      <Link href={item.link.url} rel="">
                        {item.link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
          }
          {blok?.sectionTwo &&
            <div className="mb-12 sm:col-6 lg:col-3">
                <h4>{blok?.sectionTwo}</h4>
                <ul className="mt-6">
                  {blok?.linksTwo.map((item) => (
                    <li className="mb-1" key={item.link.title}>
                    <Link href={item.link.url} rel="">
                      {item.link.title}
                    </Link>
                  </li>
                  ))}
                </ul>
              </div>
          }
          {blok?.sectionThree &&
            <div className="mb-12 sm:col-6 lg:col-3">
                <h4>{blok?.sectionThree}</h4>
                <ul className="mt-6">
                  {blok?.linksThree.map((item) => (
                    <li className="mb-1" key={item.link.title}>
                    <Link href={item.link.url} rel="">
                      {item.link.title}
                    </Link>
                  </li>
                  ))}
                </ul>
              </div>
          }
          <div className="md-12 sm:col-6 lg:col-3">
            <Link href="/" aria-label="Zegtec">
              <img src={blok?.logo?.filename} />
            </Link>
            <p classname="mt-3 mb-6">{blok?.address}</p>
            <Social source={social} className="social-icons mb-8" />
          </div>
          
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6">
          <p className="text-sm text-center">{blok?.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
