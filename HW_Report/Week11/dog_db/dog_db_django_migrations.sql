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
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2025-04-29 06:55:37.816457'),(2,'auth','0001_initial','2025-04-29 06:55:38.158972'),(3,'admin','0001_initial','2025-04-29 06:55:38.237571'),(4,'admin','0002_logentry_remove_auto_add','2025-04-29 06:55:38.241808'),(5,'admin','0003_logentry_add_action_flag_choices','2025-04-29 06:55:38.245745'),(6,'contenttypes','0002_remove_content_type_name','2025-04-29 06:55:38.314891'),(7,'auth','0002_alter_permission_name_max_length','2025-04-29 06:55:38.349757'),(8,'auth','0003_alter_user_email_max_length','2025-04-29 06:55:38.363110'),(9,'auth','0004_alter_user_username_opts','2025-04-29 06:55:38.367285'),(10,'auth','0005_alter_user_last_login_null','2025-04-29 06:55:38.402057'),(11,'auth','0006_require_contenttypes_0002','2025-04-29 06:55:38.403895'),(12,'auth','0007_alter_validators_add_error_messages','2025-04-29 06:55:38.408089'),(13,'auth','0008_alter_user_username_max_length','2025-04-29 06:55:38.445499'),(14,'auth','0009_alter_user_last_name_max_length','2025-04-29 06:55:38.490378'),(15,'auth','0010_alter_group_name_max_length','2025-04-29 06:55:38.500731'),(16,'auth','0011_update_proxy_permissions','2025-04-29 06:55:38.505369'),(17,'auth','0012_alter_user_first_name_max_length','2025-04-29 06:55:38.543798'),(18,'dogpedia','0001_initial','2025-04-29 06:55:38.617360'),(19,'sessions','0001_initial','2025-04-29 06:55:38.646551');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
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
