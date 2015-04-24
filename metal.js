(function () {
	var metalTypes = [
		{
			title: 'Home',
			stateName: 'home',
			state: {
				url: '/',
				views: {
					content: {
						templateUrl: 'home.html'
					}
				}
			}
		},
		{
			title: 'Early metal (1966−1971)',
			stateName: 'early-metal',
			state: {
				url: '/early-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Original hard rock (1974−1979)',
			stateName: 'orig-hard-rock',
			state: {
				url: '/orig-hard-rock',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Shock rock (1968−1983)',
			stateName: 'shock-rock',
			state: {
				url: '/shock-rock',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Early punk (1976−1979)',
			stateName: 'early-punk',
			state: {
				url: '/early-punk',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'New Wave of British Heavy Metal (1979−1983)',
			stateName: 'new-wave-of-british-heavy-metal',
			state: {
				url: '/new-wave-of-british-heavy-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Power metal (1976−present)',
			stateName: 'power-metal',
			state: {
				url: '/power-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Progressive metal (1970−present)',
			stateName: 'progressive-metal',
			state: {
				url: '/progressive-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Glam metal (1973−1990)',
			stateName: 'glam-metal',
			state: {
				url: '/glam-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Pop metal (1978−present)',
			stateName: 'pop-metal',
			state: {
				url: '/pop-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Stoner metal (1982−present)',
			stateName: 'stoner-metal',
			state: {
				url: '/stoner-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}

		},
		{
			title: 'Original hardcore (1980−1986)',
			stateName: 'original-hardcore',
			state: {
				url: '/original-hardcore',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Thrash metal (1983−present)',
			stateName: 'thrash-metal',
			state: {
				url: '/thrash-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'First wave of black metal (1981−1986)',
			stateName: 'first-wave-of-black-metal',
			state: {
				url: '/first-wave-of-black-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Norwegian black metal (1990−present)',
			stateName: 'norwegian-black-metal',
			state: {
				url: '/norwegian-black-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Grindcore (1987−present)',
			stateName: 'grindcore',
			state: {
				url: '/grindcore',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Death metal (1985−present)',
			stateName: 'death-metal',
			state: {
				url: '/death-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Swedish death metal (1990−present)',
			stateName: 'swedish-death-metal',
			state: {
				url: '/swedish-death-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Goth metal (aka Doom metal) (1990−present)',
			stateName: 'goth-metal',
			state: {
				url: '/goth-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Metalcore (1985−present)',
			stateName: 'metalcore',
			state: {
				url: '/metalcore',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Grunge (1988−1994)',
			stateName: 'grunge',
			state: {
				url: '/grunge',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Industrial metal (1988−present)',
			stateName: 'industrial-metal',
			state: {
				url: '/industrial-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Hard alternative (1985−present)',
			stateName: 'hard-alternative',
			state: {
				url: '/hard-alternative',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'Nu metal (1994−present)',
			stateName: 'nu-metal',
			state: {
				url: '/nu-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		},
		{
			title: 'New Wave of American Metal (2000−present)',
			stateName: 'new-wave-of-american-metal',
			state: {
				url: '/new-wave-of-american-metal',
				views: {
					content: {
						templateUrl: 'genre.html'
					}
				}
			}
		}
	];

	var application = angular.module('MetalTree', [
		'ui.router'
	]);

	application.controller('HomePageCtrl', function ($scope, $http) {
        $http.get('data/home.json').success(function(data) {
            $scope.data = data;
        });
	});

    application.controller('GenrePagerCtrl', function ($scope, $http, $state) {
        $http.get('data/' + $state.current.name + '.json').success(function(data) {
            $scope.data = data;
        });
    });

    application.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		metalTypes.forEach(function (metalType) {
			if (!metalType.stateName || !metalType.state) return;

			$stateProvider
			.state(metalType.stateName, metalType.state);
		});
	}])

	.run(['$rootScope', function ($rootScope) {
		$rootScope.metalTypes = metalTypes;
	}]);

})();
$('.carousel').carousel({
  interval: 2000
});