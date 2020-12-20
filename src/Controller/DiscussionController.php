<?php

namespace App\Controller;

use App\Entity\Discussion;
use App\Entity\User;
use App\Repository\DiscussionRepository;
use App\Repository\UserRepository;
use http\Client\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class DiscussionController extends AbstractController
{
    /**
     * @Route("/discussion", name="discussion")
     */
    public function index(DiscussionRepository $repoDiscussion, UserRepository $repoUser): JsonResponse
    {
        $userId = $this->getUser()->getId();

        $discussions = $repoDiscussion->findDiscussion($userId);

        $users = $repoUser->findListUserDiscussion($discussions[0]);

        foreach ($users as $key => $user){
            if($user['id'] == $userId) unset($users[$key]);
        }

        return new JsonResponse($users);
    }
}
