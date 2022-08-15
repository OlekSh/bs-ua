import { getPostsDataByIndex } from "../../../lib/posts-util";

export default function handler(req, res) {
  const page = +req.query.page;
  const countOnPage = +req.query.countOnPage;

  console.log('!!!PAGE' , req.query);

  try {
    const result = getPostsDataByIndex(page || 1, countOnPage);
    res.status(200).json(result)
  } catch(err) {
    res.status(500).json({error: 'failed load data'});
  }
  
}