<?php

namespace App\Controller;

use App\Entity\Discussion;
use App\Entity\DiscussionList;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Security\AppCustomAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;

class RegistrationController extends AbstractController
{
    /**
     * @Route("/register", name="app_register")
     */
    public function register(Request $request, UserRepository $repo,UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler,  AppCustomAuthenticator $authenticator, EntityManagerInterface $manager): Response
    {
        $user = new User();
        $data = $request->query->get('username');


        $user->setUsername($data);
        $user->setRoles(["ROLE_USER"]);
        $user->setPassword(
            $passwordEncoder->encodePassword(
                $user,
                "password"
            )
        );

        $users = $repo->findByUsername(["Batel", "adeldoudou1996@gmail.com"]);

        foreach($users as $newUser){
            $discussion = new Discussion();
            $discussion->addUser($user);
            $discussion->addUser($newUser);
            $manager->persist($discussion);
        }

        $manager->persist($user);
        $manager->flush();

        $guardHandler->authenticateUserAndHandleSuccess(
            $user,
            $request,
            $authenticator,
            'main' // firewall name in security.yaml
        );

        return new JsonResponse('data');
    }

}
