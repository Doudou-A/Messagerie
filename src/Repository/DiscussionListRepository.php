<?php

namespace App\Repository;

use App\Entity\DiscussionList;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DiscussionList|null find($id, $lockMode = null, $lockVersion = null)
 * @method DiscussionList|null findOneBy(array $criteria, array $orderBy = null)
 * @method DiscussionList[]    findAll()
 * @method DiscussionList[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DiscussionListRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DiscussionList::class);
    }

    public function findDiscussionList($id)
    {
        $query = $this->createQueryBuilder('a')
            ->select('a')
            ->leftJoin('a.user', 'u')
            ->addSelect('u');

        $query = $query->add('where', $query->expr()->in('u', ':u'))
            ->setParameter('u', $id)
            ->getQuery()
            ->getResult();

        return $query;
    }

    // /**
    //  * @return DiscussionList[] Returns an array of DiscussionList objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DiscussionList
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
