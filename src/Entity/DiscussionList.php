<?php

namespace App\Entity;

use App\Repository\DiscussionListRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DiscussionListRepository::class)
 */
class DiscussionList
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, inversedBy="discussionLists")
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity=Discussion::class, mappedBy="discussionList")
     */
    private $discussion;

    public function __construct()
    {
        $this->user = new ArrayCollection();
        $this->discussion = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|User[]
     */
    public function getUser(): Collection
    {
        return $this->user;
    }

    public function addUser(User $user): self
    {
        if (!$this->user->contains($user)) {
            $this->user[] = $user;
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        $this->user->removeElement($user);

        return $this;
    }

    /**
     * @return Collection|Discussion[]
     */
    public function getDiscussion(): Collection
    {
        return $this->discussion;
    }

    public function addDiscussion(Discussion $discussion): self
    {
        if (!$this->discussion->contains($discussion)) {
            $this->discussion[] = $discussion;
            $discussion->setDiscussionList($this);
        }

        return $this;
    }

    public function removeDiscussion(Discussion $discussion): self
    {
        if ($this->discussion->removeElement($discussion)) {
            // set the owning side to null (unless already changed)
            if ($discussion->getDiscussionList() === $this) {
                $discussion->setDiscussionList(null);
            }
        }

        return $this;
    }

}
