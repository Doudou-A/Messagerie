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
        $user = $this->getUser();
        $discussions = $repoDiscussion->findDiscussionList($user->getId());

        $listUser = [];
        foreach ($discussions as $discussion) {
            $aUser = $repoUser->findListUserDiscussion($discussion->getId());
            foreach ($aUser as $userEntity) {
                if($userEntity["username"] !== $user->getUsername()) $listUser[] = $userEntity;
            }
        }
        return new JsonResponse($listUser);
    }
}
