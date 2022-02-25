<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home')]
    public function index(): Response
    {
        $countries = ['Denmark', 'Romania', 'France', 'Ukraine', 'Japan',
            'United States of America', 'England'];

        return $this->render('home/index.html.twig', [
            'countries' => $countries
        ]);
    }
}
