import classes from './pagination.module.css';

function createItems(length, handleClick) {
  const items = [];

  for( let i = 1 ; i <= length; i++) {

    items.push(
      <li 
      className={classes.pagination_item}
      onClick={handleClick(i)}
      >
        <span>{i}</span>
      </li>
      );
  }
  return items;
}

function Pagination(props) {
  const { len, handlePagination } = props;

  return (
    <div className={classes.pagination}>
      <ul className={classes.pagination_list}>
        { 
          createItems(len, handlePagination)
        }
      </ul>
    </div>
    
  )
}

export default Pagination;