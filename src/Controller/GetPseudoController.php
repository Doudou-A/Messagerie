<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GetPseudoController extends AbstractController
{
    /**
     * @Route("/get-pseudo/{username}", name="get_pseudo")
     */
    public function index($username, UserRepository $repo ): JsonResponse
    {

        $username = $repo->findOneByUsername($username);

        return $username ? new JsonResponse(true) : new JsonResponse(false);
    }
}
