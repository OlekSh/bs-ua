import Link from 'next/link';

import classes from './pagination.module.css';

function createItems(length, handleClick, activePage, category) {
  const items = [];
  const urlPath = category ? `/posts/${category}`: '/posts'

  for( let i = 1 ; i <= length; i++) {

    items.push(
      <li 
      className={`${classes.pagination_item}
        ${activePage === i ? classes.pagination_item_active: ''}`
      }
      onClick={handleClick(i)}
      key={i}
      >
        <Link href={`${urlPath}?page=${i}`}>
          <a> <span>{i}</span> </a>
        </Link>
       
      </li>
      );
  }
  return items;
}

function Pagination(props) {
  const { len, handlePagination, activePage, category } = props;

  return (
    <div className={classes.pagination}>
      <ul className={classes.pagination_list}>
        { 
          createItems(len, handlePagination, activePage, category)
        }
      </ul>
    </div>
    
  )
}

export default Pagination;