import db from "../db.js";
import { validationResult } from "express-validator";

const QUERIES = {
  CREATE_REVIEW: `
    INSERT INTO review (description, user_id, artist_id, album_id, song_id, rating, rhymes, rhythm, styles, individuality, atmosphere, created_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, DEFAULT)
    RETURNING *
  `,
  GET_ALL_REVIEWS: `SELECT * FROM review`,
  GET_REVIEW_BY_ID: `SELECT * FROM review WHERE id = $1`,
  UPDATE_REVIEW: `
    UPDATE review
    SET description = $1, user_id = $2, artist_id = $3, album_id = $4, song_id = $5, rating = $6, rhymes = $7, rhythm = $8, styles = $9, individuality = $10, atmosphere = $11
    WHERE id = $12
    RETURNING *
  `,
  DELETE_REVIEW: `DELETE FROM review WHERE id = $1`,
};

class ReviewController {
  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const {
        description,
        userid,
        artist_id,
        album_id,
        song_id,
        rating,
        rhymes,
        rhythm,
        styles,
        individuality,
        atmosphere,
      } = req.body;

      
  // Проверка на наличие обязательных полей
  if (!userid) {
    return res.status(400).json({ error: "Missing required fields" });
  }

      const newReview = await db.query(QUERIES.CREATE_REVIEW, [
        description,
        userid,
        artist_id,
        album_id,
        song_id,
        rating,
        rhymes,
        rhythm,
        styles,
        individuality,
        atmosphere,
      ]);
      res.status(201).json(newReview.rows[0]);
    } catch (error) {
      console.error("Error creating review:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAll(req, res) {
    try {
      const reviews = await db.query(QUERIES.GET_ALL_REVIEWS);
      res.json(reviews.rows);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      const review = await db.query(QUERIES.GET_REVIEW_BY_ID, [id]);
      if (!review.rows[0]) {
        return res.status(404).json({ error: "Review not found" });
      }
      res.json(review.rows[0]);
    } catch (error) {
      console.error("Error fetching review:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const {
        description,
        userid,
        artistid,
        albumid,
        songid,
        rating,
        rhymes,
        rhythm,
        styles,
        individuality,
        atmosphere,
      } = req.body;

      const review = await db.query(QUERIES.GET_REVIEW_BY_ID, [id]);
      if (!review.rows[0]) {
        return res.status(404).json({ error: "Review not found" });
      }

      const updateReview = await db.query(QUERIES.UPDATE_REVIEW, [
        description,
        userid,
        artistid,
        albumid,
        songid,
        rating,
        rhymes,
        rhythm,
        styles,
        individuality,
        atmosphere,
        id,
      ]);
      res.json(updateReview.rows[0]);
    } catch (error) {
      console.error("Error updating review:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const review = await db.query(QUERIES.GET_REVIEW_BY_ID, [id]);
      if (!review.rows[0]) {
        return res.status(404).json({ error: "Review not found" });
      }

      await db.query(QUERIES.DELETE_REVIEW, [id]);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting review:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new ReviewController();
