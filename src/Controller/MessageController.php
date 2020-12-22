<?php

namespace App\Controller;

use App\Entity\Message;
use App\Form\MessageType;
use App\Repository\DiscussionRepository;
use App\Repository\MessageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/message")
 */
class MessageController extends AbstractController
{
    /**
     * @Route("/", name="message_index", methods={"GET"})
     */
    public function index(Request $request, MessageRepository $repo): Response
    {
        $idDiscussion = $request->query->get("idDiscussion");
        $aMessage = $repo->findMessage($idDiscussion);
//        $discussion = $repo->find($idDiscussion);

//        $aMessage = $discussion->getMessage();

//        dd($aMessage->toArray());
        return new JsonResponse($aMessage);
    }

    /**
     * @Route("/create", name="message_new", methods={"POST"})
     */
    public function create(Request $request, EntityManagerInterface $manager, DiscussionRepository $repo): JsonResponse
    {
        $discussion = $repo->find($request->query->get("idDiscussion"));

        $message = new Message();
        $message->setText($request->query->get("message"));
        $message->setDiscussion($discussion);

        $manager->persist($message);
        $manager->flush();

        return new JsonResponse('data');
    }

    /**
     * @Route("/{id}", name="message_show", methods={"GET"})
     */
    public function show(Message $message): Response
    {
        return $this->render('message/show.html.twig', [
            'message' => $message,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="message_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Message $message): Response
    {
        $form = $this->createForm(MessageType::class, $message);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('message_index');
        }

        return $this->render('message/edit.html.twig', [
            'message' => $message,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="message_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Message $message): Response
    {
        if ($this->isCsrfTokenValid('delete'.$message->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($message);
            $entityManager->flush();
        }

        return $this->redirectToRoute('message_index');
    }
}
