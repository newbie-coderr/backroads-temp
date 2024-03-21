import { pageLinks } from "../datas";
import PageLink from "./PageLink";

function PageLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} itemClass={itemClass} link={link} />;
      })}
    </ul>
  );
}

export default PageLinks;
