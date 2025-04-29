-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: dog_db
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dogpedia_dogbreed`
--

DROP TABLE IF EXISTS `dogpedia_dogbreed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dogpedia_dogbreed` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `english_name` varchar(100) NOT NULL,
  `family_life` longtext NOT NULL,
  `body_features` longtext NOT NULL,
  `social_behavior` longtext NOT NULL,
  `personality` longtext NOT NULL,
  `cover_image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dogpedia_dogbreed`
--

LOCK TABLES `dogpedia_dogbreed` WRITE;
/*!40000 ALTER TABLE `dogpedia_dogbreed` DISABLE KEYS */;
INSERT INTO `dogpedia_dogbreed` VALUES (1,'貴賓狗','Poodle','貴賓狗對家庭友善，容易與小孩和其他寵物相處，適合作為家庭伴侶。','擁有捲曲的毛髮，體型從玩具型、中型到標準型皆有，體態優雅。','友善且易於訓練，喜愛與人互動，適應能力強。','聰明、活潑且忠誠，學習能力強，喜愛參與各種活動。','breeds/poodle.png'),(2,'吉娃娃','Chihuahua','適合公寓生活，對主人極為忠誠，但對陌生人較為警戒。','體型極小，耳朵大而直立，短毛或長毛皆有。','喜歡與主人親近，但有時對其他狗狗不太友善，需要早期社會化訓練。','活潑、勇敢且機警，對主人忠誠但有時固執。','breeds/chihuahua.png'),(3,'博美犬','Pomeranian','適合活躍的家庭，喜歡參與家庭活動，對主人十分依戀。','擁有豐厚的雙層毛，體型小巧但外觀華麗。','喜歡交際，但有時對陌生人警戒，需要良好的社會化訓練。','聰明、精力充沛且自信，容易興奮但充滿魅力。','breeds/pomeranian.png'),(4,'比熊犬','Bichon_Frise','比熊犬非常適合家庭生活，友善且喜愛與人相處，對小孩和其他寵物也十分友好。','擁有鬆軟的白色捲毛，體型小巧，表情總是看起來充滿活力。','性格開朗且喜歡社交，適應力強，不會過於膽怯或具攻擊性。','活潑、聰明且溫順，容易訓練，是理想的伴侶犬。','breeds/bichon.png'),(5,'柴犬','Shiba_Inu','柴犬獨立、忠誠，適應力強，適合作為家庭寵物。','體型中小，擁有濃密的雙層毛，耳朵直立，尾巴捲曲。','友善但有點固執，需要從小進行良好的社會化訓練。','活潑、自信，對主人忠誠但有時較為獨立。','breeds/shiba.png'),(6,'秋田犬','Akita_Inu','秋田犬忠誠、勇敢，適合有經驗的飼主。','體型較大，肌肉結實，擁有濃密的雙層毛。','需要早期社會化，對家人友好但對陌生人較警惕。','自信、沉穩，對主人極度忠誠。','breeds/akita.png');
/*!40000 ALTER TABLE `dogpedia_dogbreed` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-29 23:41:31
