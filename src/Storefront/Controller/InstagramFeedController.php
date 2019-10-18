<?php

namespace InstagramFeed\Storefront\Controller;

use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Vinkla\Instagram\Instagram;

class InstagramFeedController extends StorefrontController
{

    /**
     * @var SystemConfigService
     */
    private $systemConfigService;

    /**
     * InstagramFeedController constructor.
     * @param SystemConfigService $systemConfigService
     */
    public function __construct(SystemConfigService $systemConfigService)
    {
        $this->systemConfigService = $systemConfigService;
    }

    /**
     * @RouteScope(scopes={"sales-channel-api"})
     * @Route("sales-channel-api/v1/sns/instagramfeed", name="sns.instagram", methods={"GET"})
     * @return JsonResponse
     */
    public function getImage(Request $request): Response
    {
        $token = $this->systemConfigService->get('InstagramFeed.config.secret');

        $instagram = new Instagram($token);
        $feed = (array) $instagram->media(['count' => $request->get('media')]);

        $response = $this->renderStorefront('@Storefront/element/cms-element-instagram.html.twig', ['media' => $feed]);

        $response->setSharedMaxAge(3600);

        return $response;
    }
}
