require 'json'

package = JSON.parse(File.read(File.join(__dir__, '../package.json')))

Pod::Spec.new do |s|
  s.name                   = 'RNRichText'
  s.version                = package['version']
  s.summary                = package['description']
  s.description            = package['description']
  s.homepage               = package['homepage']
  s.license                = package['license']
  s.author                 = package['author']
  s.source                 = { :git => 'https://github.com/prscX/react-native-richtext.git', :tag => s.version }

  s.platform               = :ios, '13.0'
  s.ios.deployment_target  = '13.0'

  s.preserve_paths         = 'LICENSE', 'package.json'
  s.source_files           = '**/*.{h,m,swift}'
  s.dependency             'React-Core'
  s.dependency             'WordPress-Aztec-iOS'
  s.dependency             'WordPress-Editor-iOS'
  s.dependency             'Gridicons'

end
