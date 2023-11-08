<?php

namespace models;

use Database;

require_once './Database.php';

class ShowsModel
{

    private $connection;

    public function __construct()
    {
        $this->connection = Database::getInstance()->getConnection();
    }

    private function getShows($queryString, $limit = null)
    {
        if (isset($limit)) {
            $queryString .= ' LIMIT ' . $limit;
        }
        $query = $this->connection->query($queryString);
        try {
            $query->execute();
            return $query->fetchAll(\PDO::FETCH_ASSOC);
        } catch (\Exception $e) {
            echo 'There is a Error in Query';
            return null;
        }
    }

    public function getAllShows($limit = null)
    {
        $queryString = 'SELECT * FROM shows';
        return $this->getShows($queryString, $limit);
    }

    public function getTrendingShows($limit = null)
    {
        $queryString = 'SELECT shows.id AS id, shows.image AS image, shows.title as title, shows.num_of_episodes_avail AS numOfEpisodesAvail, shows.total_episodes AS totalEpisodes, shows.genres AS genres, COUNT(views.show_id) AS numOfViews FROM shows JOIN views ON shows.id = views.show_id GROUP BY(shows.id)';
        return $this->getShows($queryString, $limit);
    }
}