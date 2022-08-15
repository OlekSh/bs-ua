import { getCategoryPostsByIndex } from "../../../lib/posts-util";

export default function handler(req, res) {
  const page = +req.query.page;
  const countOnPage = +req.query.countOnPage;
  const category = req.query.category;

  try {

    const result = getCategoryPostsByIndex(page, countOnPage, category);
    res.status(200).json(result);

  } catch(err) {

    res.status(500).json({error:'fail load data'});

  }
  

}