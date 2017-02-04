describe('Player template', function () {
  var template, $compile, $rootScope;

  // Include modules
  beforeEach(angular.mock.module('appTemplates'));
  beforeEach(inject(function ($templateCache, _$compile_, _$rootScope_) {
    template = $templateCache.get('components/player/player.html')
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }))

  it('contains a circle and a line', function () {
    $rootScope.vm = {
      key: 'topleft',
      value: {
        x: 50,
        y: 50
      }
    }
    var element = $compile('<div>' + template + '</div>')($rootScope);
    expect(element.find('circle').length).toBe(1);
    expect(element.find('line').length).toBe(1);
  })
})
