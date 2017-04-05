'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', '$rootScope',
  function ($scope, Global, $rootScope) {
    $rootScope.navbar = true;
    $scope.global = Global;
    $scope.sites = [{
      'name': 'makeapoint',
      'text': 'Makeapoint is a platform to craft and fine-tune ideas and messages providing a graphical experience which brough an offline methodlogy online',
      'author': 'Linnovate',
      'link': 'http://www.linnovate.net',
      'image': '/meanStarter/assets/img/makeapoint.png'
    }, {
      'name': 'Cactus Intranet',
      'text': 'Cactus Intranet is an enterprise social network with features like real-time newsfeed, notifications, groups, events, polls, referral system etc. The system has role based permission system, allowing different stakeholders access and controls relevant to them.',
      'author': 'QED42',
      'link': 'http://www.qed42.com',
      'image': '/meanStarter/assets/img/cactus.png'
    }];
    $scope.packages = {
      'gmap': {
        'name': 'gmap',
        'text': 'gmap lets you add geographical information to your applications objects',
        'author': 'Linnovate',
        'link': 'http://www.qed42.com',
        'image': '/meanStarter/assets/img/gmap.png'
      },
      'upload': {
        'name': 'Upload',
        'text': 'Upload lets you add upload functionality to MEAN stack',
        'author': 'Linnovate',
        'link': 'http://www.linnovate.net',
        'image': 'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      },
      'socket': {
        'name': 'Socket',
        'text': 'Socket.io support',
        'author': 'Linnovate',
        'link': 'http://www.linnovate.net',
        'image': 'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      }
    };

    $scope.docs = [{
      text: 'Overview',
      link: 'http://learn.mean.io/#mean-technologies'
    }, {
      text: 'Packages',
      link: 'http://learn.mean.io/#mean-packages'
    }, {
      text: 'CLI',
      link: 'http://learn.mean.io/#mean-cli'
    }, {
      text: 'Network',
      link: 'http://learn.mean.io/#mean-mean-network'
    }, {
      text: 'Overriding',
      link: 'http://learn.mean.io/#mean-packages-overriding-the-default-layouts'
    }, {
      text: 'Contribution',
      link: 'http://learn.mean.io/#mean-packages-contributing-your-package'
    }];

    $scope.communities = [{
      link: 'https://facebook.com/groups/mean.io/',
      text: 'Informal support, news and just hanging out',
      icon: 'facebook'
    }, {
      link: 'https://github.com/linnovate/mean/',
      text: 'Issues, Support, Code discussions and PRs',
      icon: 'facebook'
    }, {
      link: 'https://gitter.im/linnovate/mean/',
      text: 'Support and Technical discussions',
      icon: 'gitter'
    }, {
      link: 'https://hangout.mean.io/',
      text: 'Video support, shared coding and to meet the people behind mean.io',
      icon: 'hangout'
    }];

    $scope.site = {
        url: "",
        event: {
            name: "WarwickHACK",
            description: "WarwickHACK is a hackathon event where programmers, ears come together to build, make and create. The event is a classic hackathon, where you have 24 hours to go crazy with your ideas!",
            date: "5 & 6th Feb 2017",
            location: "Warwick University"
        },
        about: {
            description: "WarwickHACK is a hackathon event where programmers, ears come together to build, make and create. The event is a classic hackathon, where you have 24 hours to go crazy with your ideas!"
        }, 
        info: {
            sections: [{
                image: "images/image1.png",
                title: "Make",
                description: "Description 1"
            },{
                image: "images/image2.png",
                title: "Create",
                description: "Description 2"
            },{
                image: "images/image3.png",
                title: "Innovate",
                description: "Description 3"
            }]
        },
        faq: [{
            question: "Who are WarwickTECH?",
            answer: "WarwickTECH is a tech society with a focus and aim to bringing together like minded students to build and share their ideas. We're a small team of passionate students who want to connect the makers, creators and innovators on and around campus. We host meetups, workshops, hackathons and more!"
        },{
            question: "What if I can't code?!",
            answer: "We welcome participants with or without programming experience. In fact, we've tried our hardest to ensure that this WarwickHACK is as beginner friendly as we can possibly make it! We'll be running beginners' workshops all throughout the weekend to help you get started."
        },{
            question: "What should I bring?",
            answer: "You should bring your own laptop and any other kit you want to work on across the weekend. While we will be providing a quiet rest area with sleeping mats, you should bring a sleeping bag and/or a pillow for increased comfort."
        }],
        signup: {
            oauth: {
                client_id: "ABC",
                redirect_uri: "thissite/auth"
            },
            registermsg : "Congratulations, you are registered for this event"
        }
    };

    $scope.$watch(function () {
      for (var i = 0; i < $scope.sites.length; i += 1) {
        if ($scope.sites[i].active) {
          return $scope.sites[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  }
]);
