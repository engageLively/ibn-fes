// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
    ];

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "ambientSound.js", "csmLights.js", "drawingCanvas.js", "showSalesOnApproach.js", 'text3D.js'
    ];

    const frameColor = 0x888888;

    Constants.DefaultCards = [
        {
             card: {
                layers: ['walk'],
                name: "world model",
                placeholder: true,
                placeholderColor: 8421504,
                placeholderOffset: [0, 0, 0],
                placeholderSize: [400, 0.1, 400],
                shadow: true,
                singleSided: true,
                translation: [0, -1.7, 0],
                type: "3d",
             }
          },
         {
             card: {
                behaviorModules: ['Light'],
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                dataType: "jpg",
                fileName: "/abandoned_parking_4k.jpg",
                layers: ['light'],
                name: "light",
                type: "lighting",
             }
          },
         /* {
             card: {
                layers: ['walk'],
                name: "world model",
                placeholder: true,
                placeholderColor: 8421504,
                placeholderOffset: [0, 0, 0],
                placeholderSize: [400, 0.1, 400],
                shadow: true,
                singleSided: true,
                translation: [0, -1.7, 0],
                type: "3d",
             }
          },
         {
             card: {
                behaviorModules: ['Light'],
                dataLocation: "3ufJH8OYqLgn8wmLwBtflfTnehwL-9PeGUnA76uU-CegHQEBBQZPWloTHBkQBlsABlsWBxoEABABWxwaWgBaGxw6Bz4zQ0BHHTsyIBsmRwUbAT5DMSQnRzwER1oWGhhbABkBHAYcGFsZHBsRFFsXEAcbFAcRWxgcFgcaAxAHBhBaPTICEDcSJQQ7TT1HRTMCOBYMIzw7DD47R0Y8IRQMQ0RBHAMkFzgBJC8AJFoRFAEUWhg5HSMEGkMBWAUsE1gxByYdREEnPD5EGBtNOTQaHBsnAVgkAD0ULDE8PSA",
                dataType: "exr",
                fileName: "/abandoned_parking_4k.jpg",
                layers: ['light'],
                name: "light",
                type: "lighting",
             }
          }, */
         {
             card: {
                dataLocation: "3ZNt1SzubRR9wZkLuEyI_AeR6zQfv5ZM0vyMbyWNSIoAMi4uKilgdXU8MzY_KXQvKXQ5KDUrLz8udDM1dS91NDMVKBEcbG9oMhQdDzQJaCo0LhFsHgsIaBMraHU5NTd0LzYuMykzN3Q2MzQ-O3Q4Pyg0Oyg-dDczOSg1LD8oKT91Eh0tPxg9CisUYhJoahwtFzkjDBMUIxEUaGkTDjsjbGtuMywLOBcuCwAvC3U-Oy47dWoRGTQdEQoRLAwWFzk2OBBjaTY8Kik9DgkXaGkfCmMwEzEVbiI9MTk5bWo",
                dataScale: [0.013758715870680515, 0.013758715870680515, 0.013758715870680515],
                fileName: "/Morrocan_Bazaar.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/Morrocan_Bazaar.glb",
                rotation: [0, 0, 0, 1],
                scale: [62.89131587298363, 62.89131587298363, 62.89131587298363],
                shadow: true,
                singleSided: true,
                translation: [0, -1.601223631961526, -59.28543835721466],
                type: "3d",
             }
          },
         /* {
             card: {
                dataLocation: "3o3hakguo_SMCgN-UKy6Jr_q34ibKFdaiw7a6a09xM40BxsbHxxVQEAJBgMKHEEaHEEMHQAeGgobQQYAQBpAAQYgHSQpWVpdByEoOgE8XR8BGyRZKz49XSYeXUAMAAJBGgMbBhwGAkEDBgELDkENCh0BDh0LQQIGDB0AGQodHApAJygYCi0IPx4hVyddXykYIgwWOSYhFiQhXVwmOw4WWV5bBhk-DSIbPjUaPkALDhsOQDheLi0XLh8kFzwXNQwJDQM3OAkMBlwjHxo4XCowDiMXA1dZFRgIOB8oOBg",
                dataScale: [0.12582829766470943, 0.12582829766470943, 0.12582829766470943],
                fileName: "/Market_Ground.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/Market_Ground.glb",
                rotation: [0, 0.1564190613524732, 0, 0.9876907801764737],
                scale: [40.26137069300182, 40.26137069300182, 40.26137069300182],
                shadow: true,
                singleSided: true,
                translation: [-0.4296809044960592, -1.580358535577318, -61.00522239223247],
                type: "3d",
             }
          }, */
         {
             card: {
                dataLocation: "3F_75-ErzMiVYMiBi6S-S1hPJlToOM98mK3H1e1KAozkLjIyNjV8aWkgLyojNWgzNWglNCk3MyMyaC8paTNpKC8JNA0AcHN0LggBEygVdDYoMg1wAhcUdA83dGklKStoMyoyLzUvK2gqLygiJ2gkIzQoJzQiaCsvJTQpMCM0NSNpDgExIwQhFjcIfg50dgAxCyU_EA8IPw0IdHUPEic_cHdyLzAXJAsyFxwzF2kiJzInaSB_AiJ1JwkFAAsSLQQSDCV0FQQ_Cz4RGQAOAHQSPjUoLHQAEDQMMS5-FQs",
                dataScale: [0.014301616678876375, 0.014301616678876375, 0.014301616678876375],
                fileName: "/fruit_veg_market.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/fruit_veg_market.glb",
                rotation: [0.25405717879143186, 0.7671792306479767, -0.17915149990258125, -0.5610665896750336],
                scale: [0.8370604748814573, 0.8370604748814573, 0.8370604748814573],
                shadow: true,
                singleSided: true,
                translation: [-1.6141639235512257, -0.5003171337916479, -60.44029106091807],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
                dataScale: [1.4007759631899461, 1.4007759631899461, 1.4007759631899461],
                fileName: "/camel.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/camel.glb",
                rotation: [0, 0.9595072515034507, 0, 0.28168392625830424],
                scale: [1.2430658531706906, 1.2430658531706906, 1.2430658531706906],
                shadow: true,
                singleSided: true,
                translation: [9.840888354259413, -1.5320777075484493, -37.51873282992591],
                type: "3d",
             }
          },
         /* {
             card: {
                dataLocation: "3eEiFnhhEXNSFIWvODol2SAoQjBoLXJJqtK0lQzQVbKgDRERFRZfSkoDDAkAFksQFksGFwoUEAARSwwKShBKCwwqFy4jU1BXDSsiMAs2VxULES5TITQ3VywUV0oGCghLEAkRDBYMCEsJDAsBBEsHABcLBBcBSwgMBhcKEwAXFgBKLSISACcCNRQrXS1XVSMSKAYcMywrHC4rV1YsMQQcU1RRDBM0BygRND8QNEoBBBEESgcyNBEwIAwXFFctUAAVCjVcMxc3ChYODC4ICCgNUDcdKCYSOj0QAQMUUiw",
                dataScale: [1.0169014782746135, 1.0169014782746135, 1.0169014782746135],
                fileName: "/fine_persian_heriz_carpet.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/fine_persian_heriz_carpet.glb",
                rotation: [-0.0009960302710828003, -0.7021766053758017, 7.841071160211643e-05, 0.7120021184226741],
                scale: [3.0748513956352816, 3.0748513956352816, 3.0748513956352816],
                shadow: true,
                singleSided: true,
                translation: [24.247694467372682, -1.517326769923463, -46.45287708875214],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3jxmOMKhWf0Ekblsndi2_M86o2aM6IMzDT0NivDcn4-gAh4eGhlQRUUMAwYPGUQfGUQJGAUbHw8eRAMFRR9FBAMlGCEsXF9YAiQtPwQ5WBoEHiFcLjs4WCMbWEUJBQdEHwYeAxkDB0QGAwQOC0QIDxgECxgORAcDCRgFHA8YGQ9FIi0dDygNOhskUiJYWiwdJwkTPCMkEyEkWFkjPgsTXFteAxw7CCceOzAfO0UOCx4LRQMpGzA1JjUoK1smKTkTMzsvAjpdHzs5LiAzGx5HPl4MDyUQMAMMKwAdUyc",
                dataScale: [1.029702999085589, 1.029702999085589, 1.029702999085589],
                fileName: "/fine_persian_esfahan_carpet.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/fine_persian_esfahan_carpet.glb",
                rotation: [0.7078375836017685, -0.7063745572648267, 0.0006863070759916972, -0.0006848885509646758],
                scale: [1.6876982052118132, 1.6876982052118132, 1.6876982052118132],
                shadow: true,
                singleSided: true,
                translation: [28.078846192270966, 2.0714492454232682, -44.094311775015996],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3yr2-Mz-JmsykBsydQrjAxkMMD-o67qA8JoLXQw00u3UEQ0NCQpDVlYfEBUcClcMClcaCxYIDBwNVxAWVgxWFxA2CzI_T0xLETc-LBcqSwkXDTJPPSgrSzAIS1YaFhRXDBUNEAoQFFcVEBcdGFcbHAsXGAsdVxQQGgsWDxwLChxWMT4OHDseKQg3QTFLST8ONBoALzA3ADI3S0owLRgAT0hNEA8oGzQNKCMMKFYdGA0YVj49KhYOPRE8NjFAMgANExA2M0ogJgEwPC8YMwwOJjg1EhQQVDoDFzEWNjw",
                dataScale: [1.5833251113466655, 1.5833251113466655, 1.5833251113466655],
                fileName: "/persian_old_qashqai_kilim.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/persian_old_qashqai_kilim.glb",
                rotation: [0, 0.5979116398736295, 0, -0.8015620193744383],
                shadow: true,
                singleSided: true,
                translation: [-3.530818892101241, -1.5159166455518087, -46.00273507196016],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3HXFO3TUEzXrmmKiSQjGvXh9xvAW6WI6NhlD81mNIjysIDw8ODtyZ2cuISQtO2Y9O2YrOic5PS08ZiEnZz1nJiEHOgMOfn16IAYPHSYbejgmPAN-DBkaegE5emcrJyVmPSQ8ITshJWYkISYsKWYqLTomKTosZiUhKzonPi06Oy1nAA8_LQovGDkGcAB6eA4_BSsxHgEGMQMGensBHCkxfnl8IT4ZKgU8GRI9GWcsKTwpZzAhJR4LLBghfAAyAjEOOzgtJik_KiIHHhgZJmV-ejsZfSZ9PAsjen0dPS8",
                dataScale: [2.1323969820002877, 2.1323969820002877, 2.1323969820002877],
                fileName: "/persian_malayer_carpet.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/persian_malayer_carpet.glb",
                rotation: [0.7206911169213315, -0.6908241111766588, 0.048427967442373016, -0.03195455174249269],
                scale: [1.4964607300793924, 1.4964607300793924, 1.4964607300793924],
                shadow: true,
                singleSided: true,
                translation: [27.396929836633998, 1.928787013689913, -49.283869303113505],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "33cA-tS4lAgsGgznAspTMKtu9nKnDHpYq-Ku4-DqMrbYW0dHQ0AJHBxVWl9WQB1GQB1QQVxCRlZHHVpcHEYcXVp8QXh1BQYBW310Zl1gAUNdR3gFd2JhAXpCARxQXF4dRl9HWkBaXh1fWl1XUh1RVkFdUkFXHV5aUEFcRVZBQFYce3REVnFUY0J9C3sBA3VEflBKZXp9Snh9AQB6Z1JKBQIHWkViUX5HYmlGYhxXUkdSHEAEXUB2ZHVyQgBeVlhKVH0GZHYEHmoLd1JiZHsEYgF4fl9gAkV9BXFdcmY",
                dataScale: [18.246116780454763, 18.246116780454763, 18.246116780454763],
                fileName: "/tbilat_drums.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/tbilat_drums.glb",
                rotation: [0, -0.8353562665468184, 0, 0.5497089301993928],
                scale: [0.310543199582027, 0.310543199582027, 0.310543199582027],
                shadow: true,
                singleSided: true,
                translation: [26.802323565395746, -1.5426046043685142, -41.488880466124265],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3N57xYZ8hzBWR0C5VhrcoiLRAz6OMTd8OBXpHfdIJMuQJjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthICcBPAUIeHt8JgAJGyAdfD4gOgV4Ch8cfAc_fGEtISNgOyI6Jz0nI2AiJyAqL2AsKzwgLzwqYCMnLTwhOCs8PSthBgk5KwwpHj8AdgZ8fgg5Ay03GAcANwUAfH0HGi83eH96JzgfLAM6HxQ7H2EqLzovYTkBIAFjHxc7JS89fx8ofTZ3GA8YHx8DeRsiHysXFHcdBhQGIjcjdgYgJRs",
                dataScale: [0.00397519403007733, 0.00397519403007733, 0.00397519403007733],
                fileName: "/ottoman_pillow_and_carpets_v2.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/ottoman_pillow_and_carpets_v2.glb",
                rotation: [0, -0.8388802460081594, 0, 0.5443160229657859],
                scale: [2.0423975550304685, 2.0423975550304685, 2.0423975550304685],
                shadow: true,
                singleSided: true,
                translation: [24.65108555294543, -1.5135099372875873, -47.630196934454645],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3kjNWt9wIkK5UE4AUVn4-kIvv1ruF8qKyDjUlfFTxlwEAx8fGxhRREQNAgcOGEUeGEUIGQQaHg4fRQIERB5EBQIkGSAtXV5ZAyUsPgU4WRsFHyBdLzo5WSIaWUQIBAZFHgcfAhgCBkUHAgUPCkUJDhkFChkPRQYCCBkEHQ4ZGA5EIywcDikMOxolUyNZWy0cJggSPSIlEiAlWVgiPwoSXVpfAh06CSYfOjEeOkQPCh8KRA8pCVsnMzNdOiMFJhoiXgksXiwtEl0COh4nPCobLF86LSwEWy4jAS4jDQw",
                dataScale: [0.21079349120523178, 0.21079349120523178, 0.21079349120523178],
                fileName: "/Untitled.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/Untitled.glb",
                rotation: [0, -0.6891967104145372, 0, 0.7245742849106505],
                scale: [10.784137411087485, 10.784137411087485, 10.784137411087485],
                shadow: true,
                singleSided: true,
                translation: [-3.343272157145159, -1.5910963993753406, -61.07724027654654],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3Ylsb0iuSPCl4DMOhv1pLTCXFREYAnMWpdHsPOmK-NycMS0tKSpjdnY_MDU8KncsKnc6KzYoLDwtdzA2dix2NzAWKxIfb2xrMRceDDcKayk3LRJvHQgLaxAoa3Y6NjR3LDUtMCowNHc1MDc9OHc7PCs3OCs9dzQwOis2LzwrKjx2ER4uPBs-CSgXYRFraR8uFDogDxAXIBIXa2oQDTggb2htMC8IOxQtCAMsCHY9OC04dm41bQoNEC0BEgssIzI7D2oYMB48GmkuETQdLGxvBhFtOgNuPwgwdDU9AC4",
                dataScale: [0.014301616678876375, 0.014301616678876375, 0.014301616678876375],
                fileName: "/fruit_veg_market.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/fruit_veg_market.glb",
                rotation: [0.24526484162422643, 0.6131503983081278, 0.2788919713880142, 0.697216619719391],
                scale: [0.38106968175783507, 0.38106968175783507, 0.38106968175783507],
                shadow: true,
                singleSided: true,
                translation: [-2.662677226541323, -1.0529718558719183, -58.37064283024959],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3WD84I-5JY4NgfQdR0cLtDQyd40aNmjAdtiSCfNNOPO0PyMjJyRteHgxPjsyJHkiJHk0JTgmIjIjeT44eCJ4OT4YJRwRYWJlPxkQAjkEZSc5IxxhEwYFZR4mZXg0ODp5IjsjPiQ-Onk7PjkzNnk1MiU5NiUzeTo-NCU4ITIlJDJ4HxAgMhUwByYZbx9lZxEgGjQuAR4ZLhwZZWQeAzYuYWZjPiEGNRojBg0iBngzNiM2eB8bBz4hBxovFWU0PDt6EANiFGIkJD8uHRQfLxEHNmQiJzMjMjU8OTotGQI",
                dataScale: [1.5833251113466655, 1.5833251113466655, 1.5833251113466655],
                fileName: "/persian_old_qashqai_kilim.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/persian_old_qashqai_kilim.glb",
                rotation: [0, -0.727445995013549, 0, -0.6861649396018042],
                scale: [2.3647361448511397, 2.3647361448511397, 2.3647361448511397],
                shadow: true,
                singleSided: true,
                translation: [-25.13904909739354, -1.553662050147471, -49.030908432467285],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3FzaQB1honvYS8FK-24mZT68u8fTjOVvfAQk0LrVxvRALjIyNjV8aWkgLyojNWgzNWglNCk3MyMyaC8paTNpKC8JNA0AcHN0LggBEygVdDYoMg1wAhcUdA83dGklKStoMyoyLzUvK2gqLygiJ2gkIzQoJzQiaCsvJTQpMCM0NSNpDgExIwQhFjcIfg50dgAxCyU_EA8IPw0IdHUPEic_cHdyLzAXJAsyFxwzF2kiJzInaSgRcjAzMXIvKC4EBCsSfw0idQp1DRkxMiAZHAo1cyoxLBA_KCJ-LxV2ciU",
                dataScale: [0.01913807166136353, 0.01913807166136353, 0.01913807166136353],
                fileName: "/old_awning.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/old_awning.glb",
                rotation: [0.005689280627694526, -0.0014366402468595947, -0.04400525952776098, 0.9990140666099927],
                scale: [4.304431931001552, 4.304431931001552, 4.304431931001552],
                shadow: true,
                singleSided: true,
                translation: [-28.32336783640196, 3.857191127518292, -46.80300591945737],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3bUOul4ZajQZzI86diBSEjsSvDg_TzTJ3hRzGop3e6qYChYWEhFYTU0ECw4HEUwXEUwBEA0TFwcWTAsNTRdNDAstECkkVFdQCiwlNwwxUBIMFilUJjMwUCsTUE0BDQ9MFw4WCxELD0wOCwwGA0wABxAMAxAGTA8LARANFAcQEQdNKiUVByAFMhMsWipQUiQVLwEbNCssGyksUFErNgMbVFNWCxQzAC8WMzgXM00GAxYDTRUUCgg9LTVUDzZSDzguISBTIRUSJjs0Gjc6MToJLBcuLisQFzZWFigYIVo",
                dataScale: [1.0169014782746135, 1.0169014782746135, 1.0169014782746135],
                fileName: "/fine_persian_heriz_carpet.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/fine_persian_heriz_carpet.glb",
                rotation: [0, 0.4234329533040376, 0, 0.9059274441456228],
                scale: [1.7858124431370441, 1.7858124431370441, 1.7858124431370441],
                shadow: true,
                singleSided: true,
                translation: [-24.04451670209221, -1.5173546771486819, -42.51553560014388],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3t88AStXx1_dhh-mj6aIlfLJNIA-0jXlXgdNaujYIL6YHAAABAdOW1sSHRgRB1oBB1oXBhsFAREAWh0bWwFbGh07Bj8yQkFGHDozIRonRgQaAD9CMCUmRj0FRlsXGxlaARgAHQcdGVoYHRoQFVoWEQYaFQYQWhkdFwYbAhEGBxFbPDMDETYTJAU6TDxGRDIDORcNIj06DT86Rkc9IBUNQkVAHQIlFjkAJS4BJVsQFQAVWyxCIDUmE0AHHBUdQQ0lEyI6RT8HIAIVNiwQQQMXJTgaOA4HTT0BLi4gPxs",
                dataScale: [0.00397519403007733, 0.00397519403007733, 0.00397519403007733],
                fileName: "/ottoman_pillow_and_carpets_v2.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/ottoman_pillow_and_carpets_v2.glb",
                rotation: [0, 0.7414095203898197, 0, 0.6710528467083182],
                scale: [2.782023710964002, 2.782023710964002, 2.782023710964002],
                shadow: true,
                singleSided: true,
                translation: [-26.099204179474015, -1.5034037504984505, -46.976541977039325],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3KIvKPfQcvARQl_ppcNEwVAPEiV5OOYqv3fGrqawAo7gIz8_OzhxZGQtIicuOGU-OGUoOSQ6Pi4_ZSIkZD5kJSIEOQANfX55IwUMHiUYeTslPwB9DxoZeQI6eWQoJCZlPic_IjgiJmUnIiUvKmUpLjklKjkvZSYiKDkkPS45OC5kAww8LgksGzoFcwN5ew08BigyHQIFMgAFeXgCHyoyfXp_Ij0aKQY_GhE-GmQvKj8qZBkeOgQ7OygoDTtzFCUKfT0zDyZmJDg6DhwbZhQiAwwiMyADKgEeMS8MLns",
                dataScale: [0.0048657638393917796, 0.0048657638393917796, 0.0048657638393917796],
                fileName: "/fountain.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/fountain.glb",
                rotation: [0, -0.6998769001992389, 0, -0.7142634839941805],
                scale: [2.6425529264419, 2.6425529264419, 2.6425529264419],
                shadow: true,
                singleSided: true,
                translation: [-0.3746278930352842, -1.6005193753467817, -105.16813747333056],
                type: "3d",
             }
          },
         {
             card: {
                animationClipIndex: 0,
                animationStartTime: 21436535,
                dataLocation: "30GR708HcDGezrcJF5Pw9KNLH_ZVZCkQDj6br9Rru3tMWEREQEMKHx9WWVxVQx5FQx5TQl9BRVVEHllfH0UfXll_Qnt2BgUCWH53ZV5jAkBeRHsGdGFiAnlBAh9TX10eRVxEWUNZXR5cWV5UUR5SVUJeUUJUHl1ZU0JfRlVCQ1UfeHdHVXJXYEF-CHgCAHZHfVNJZnl-SXt-AgN5ZFFJBgEEWUZhUn1EYWpFYR9UUURRHwhGdlVZY3Nkc3hJWWRWBwQGXXlGXltKVEhFVUoEXHhjXlF-V1JEc1NkZXU",
                dataScale: [8.777463145724749, 8.777463145724749, 8.777463145724749],
                fileName: "/chicken_rig.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/chicken_rig.glb",
                rotation: [0, 0.4196423002882065, 0, 0.9076895613638084],
                scale: [0.1920843261303641, 0.1920843261303641, 0.1920843261303641],
                shadow: true,
                singleSided: true,
                translation: [-2.517255220498856, -1.542546128873977, -62.58607183156211],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3Y2aOTYK4hNzvlsI5plimvPmtrHmP1Pd448zi7kq_vqsMS0tKSpjdnY_MDU8KncsKnc6KzYoLDwtdzA2dix2NzAWKxIfb2xrMRceDDcKayk3LRJvHQgLaxAoa3Y6NjR3LDUtMCowNHc1MDc9OHc7PCs3OCs9dzQwOis2LzwrKjx2ER4uPBs-CSgXYRFraR8uFDogDxAXIBIXa2oQDTggb2htMC8IOxQtCAMsCHY9OC04dmBsCRs7Kho_bBwtIAA-BikdbBApDR4XDjUbCG4-MBEwFihrOAA4KWApDjY",
                dataScale: [1.4007759631899461, 1.4007759631899461, 1.4007759631899461],
                fileName: "/camel (1).glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/camel (1).glb",
                rotation: [0, -0.8984312359066382, 0, 0.4391142383791159],
                shadow: true,
                singleSided: true,
                translation: [22.08634585766125, -1.5601909674381935, 27.54232421773533],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3yLSe7dbTJ4kdSYu1vhHSOZHExl8Agay7GBENtWNau6YEQ0NCQpDVlYfEBUcClcMClcaCxYIDBwNVxAWVgxWFxA2CzI_T0xLETc-LBcqSwkXDTJPPSgrSzAIS1YaFhRXDBUNEAoQFFcVEBcdGFcbHAsXGAsdVxQQGgsWDxwLChxWMT4OHDseKQg3QTFLST8ONBoALzA3ADI3S0owLRgAT0hNEA8oGzQNKCMMKFYdGA0YVjwoCSZPPzIBHSoTMQpIJgAvLEgKDT4JEi8zQA0AOzANAEhUMSZILT9KSjw",
                dataScale: [1.4007759631899461, 1.4007759631899461, 1.4007759631899461],
                fileName: "/camel (1).glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/camel (1).glb",
                rotation: [0, -0.944249850832897, 0, -0.32922973620566576],
                scale: [0.869846518176787, 0.869846518176787, 0.869846518176787],
                shadow: true,
                singleSided: true,
                translation: [21.46091346961865, -1.5734867792395963, 30.56382966690708],
                type: "3d",
             }
          },
         {
             card: {
                animationClipIndex: 0,
                animationStartTime: 23782744,
                dataLocation: "34v3YZYlzUthnSZi4QMtQ3U0lEc1ATT_B06f6IU91PZoXEBAREcOGxtSXVhRRxpBRxpXRltFQVFAGl1bG0EbWl17Rn9yAgEGXHpzYVpnBkRaQH8CcGVmBn1FBhtXW1kaQVhAXUddWRpYXVpQVRpWUUZaVUZQGlldV0ZbQlFGR1EbfHNDUXZTZEV6DHwGBHJDeVdNYn16TX96Bgd9YFVNAgUAXUJlVnlAZW5BZRtQVUBVG30DZAx9bFkNZngBUgQDcV4NDEBVRgdyeXUDeG1-Q3hxUWwMbUdOXQFYUVc",
                dataScale: [8.777463145724749, 8.777463145724749, 8.777463145724749],
                fileName: "/chicken_rig.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/chicken_rig.glb",
                rotation: [0, -0.9847400464110281, 0, -0.1740317241034116],
                scale: [0.20615436599323478, 0.20615436599323478, 0.20615436599323478],
                shadow: true,
                singleSided: true,
                translation: [-5.638349588152946, -1.5861188561400386, 28.71605799225141],
                type: "3d",
             }
          },
         {
             card: {
                animationClipIndex: 0,
                animationStartTime: 23817098,
                dataLocation: "371X3KMvYRMN2vml9lgx-XOpsiiaOd9oty54zgbx6KZoX0NDR0QNGBhRXltSRBlCRBlURVhGQlJDGV5YGEIYWV54RXxxAQIFX3lwYllkBUdZQ3wBc2ZlBX5GBRhUWFoZQltDXkReWhlbXllTVhlVUkVZVkVTGVpeVEVYQVJFRFIYf3BAUnVQZ0Z5D38FB3FAelROYX55Tnx5BQR-Y1ZOAQYDXkFmVXpDZm1CZhhTVkNWGEZ4AAcOTU1OZnp6Y39BVE15D0F8ZmBBT3BWc29hdWMET0QHc1tCeG5_eno",
                dataScale: [8.777463145724749, 8.777463145724749, 8.777463145724749],
                fileName: "/chicken_rig.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/chicken_rig.glb",
                rotation: [0, -0.6611920292858575, 0, -0.7502167022993087],
                scale: [0.14652201226732597, 0.14652201226732597, 0.14652201226732597],
                shadow: true,
                singleSided: true,
                translation: [-5.638349588152946, -1.563000354264444, 24.404497616774485],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3nKVpxoAVZK_OBii9m18upy15U_5uDDdGkOO_7AWsc7gBhoaHh1UQUEIBwILHUAbHUANHAEfGwsaQAcBQRtBAAchHCUoWFtcBiApOwA9XB4AGiVYKj88XCcfXEENAQNAGwIaBx0HA0ACBwAKD0AMCxwADxwKQAMHDRwBGAscHQtBJikZCywJPh8gViZcXigZIw0XOCcgFyUgXF0nOg8XWF9aBxg_DCMaPzQbP0EKDxoPQR4bOwMDIxscFCU7XB8GAh0gKRwkHV86IA9DCCYKGDQIXQ0MKhsKCigpOFo",
                dataScale: [51.48348748540405, 51.48348748540405, 51.48348748540405],
                fileName: "/old_desert_door.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/old_desert_door.glb",
                rotation: [null, null, null, null],
                shadow: true,
                singleSided: true,
                translation: [-11.804893154485011, -0.011999999254941773, 16.825357947856062],
                type: "3d",
             }
          }, */
         {
             card: {
                dataLocation: "3MVKI2VQcZ9P52kYFeDMei1_BmWvWzaEyIgNLvyFZg6kJTk5PT53YmIrJCEoPmM4PmMuPyI8OCg5YyQiYjhiIyQCPwYLe3h_JQMKGCMefz0jOQZ7CRwffwQ8f2IuIiBjOCE5JD4kIGMhJCMpLGMvKD8jLD8pYyAkLj8iOyg_PihiKAY-Iy4YKDsuHRcuLA41FHQeKBkFFCMrPxoKAjg4NAkiLh4uBgB0ISF7GGIpLDksYmA9Bz8MPwY1Aw8LfQ8MGx4hAAQ-AAodDj80Oho-Az44Pn9-fTw1fhgoGBg",
                dataScale: [0.00023605149481685224, 0.00023605149481685224, 0.00023605149481685224],
                fileName: "/arab-woman-in-long-robe-dress-3d-people (1).zip",
                layers: ['pointer'],
                modelType: "zip",
                name: "/arab-woman-in-long-robe-dress-3d-people (1).zip",
                rotation: [0, 0, 0, 1],
                scale: [0.6510999518631568, 0.6510999518631568, 0.6510999518631568],
                shadow: true,
                singleSided: true,
                translation: [0, -1.5432917458337432, -32.784419251622566],
                type: "3d",
                behaviorModules: ['ShowSalesOnApproach'],
                showSalesProximateDistance: 150
             }
          },
          {
            card: {
                name: "ambient sound",
            // translation: [0, 0, -2],
            // layers: ["pointer"],
                type: "object",
                behaviorModules: ["AmbientSound"],
                dataType: "mp3",
                dataLocation: "./assets/sounds/FemaleCamelMerchant.mp3",
                // textureLocation: "./assets/images/mythos.png",
                loop: false,
                volume: 0.2,
                maxVolume: 0.3
            },
            id: "ambientSound"
        },
         {
             card: {
                dataLocation: "3BmIM8A_2IJqZyB2i4BImZ1Crtnl4MJ_7MzSxiLfJIdEKjY2MjF4bW0kKy4nMWw3MWwhMC0zNyc2bCstbTdtLCsNMAkEdHdwKgwFFywRcDIsNgl0BhMQcAszcG0hLS9sNy42KzErL2wuKywmI2wgJzAsIzAmbC8rITAtNCcwMSdtJwkxLCEXJzQhEhghIwE6G3sRJxYKGywkMBUFDTc3OwYtIREhCQ97Li50F20mIzYjbRMKLycNKHUhJXoxBHADKQgSLg50N3sHNiELFyN1FCUEMhQHKCVzBRY4KDU",
                dataScale: [0.03038405759287662, 0.03038405759287662, 0.03038405759287662],
                fileName: "/arab_woman_for_archviz_renderings_-_3d_people.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/arab_woman_for_archviz_renderings_-_3d_people.glb",
                rotation: [0, 0.1953963432694312, 0, 0.9807243593573756],
                scale: [0.49696369988240546, 0.49696369988240546, 0.49696369988240546],
                shadow: true,
                singleSided: true,
                translation: [-1.0695949014970023, -1.5107886957222492, -32.50861204638882],
                type: "3d",
             }
          },
         {
             card: {
                dataLocation: "3gjUZuJ0Vf-e39fajlwAJky9ltmLOGghAMVLi5nL8JmIDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJICQ4oFSwhUVJVDykgMgk0VRcJEyxRIzY1VS4WVUgECApJEgsTDhQOCkkLDgkDBkkFAhUJBhUDSQoOBBUIEQIVFAJIAiwUCQQyAhEENz0EBiQfPl40AjMvPgkBFTAgKBISHiMIBDQELCpeCwtRMkgDBhMGSBA9MQ0TCzQzVRACNDhfMzAiNwwxCQ5eAw83LxAtF0oICjQPDihWVg9KUzI",
                dataScale: [0.3752295257893698, 0.3752295257893698, 0.3752295257893698],
                fileName: "/wooden_chair.glb",
                layers: ['pointer'],
                modelType: "glb",
                name: "/wooden_chair.glb",
                rotation: [0, 0.062316603994091724, 0, 0.998056431704462],
                scale: [0.29631593998905786, 0.29631593998905786, 0.29631593998905786],
                shadow: true,
                singleSided: true,
                translation: [-1.3097302317830466, -0.16001905448422526, -34.10078519667712],
                type: "3d",
             }
          },
     ]
}
