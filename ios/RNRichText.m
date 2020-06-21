
#import "RNRichText.h"

#import "RNRichText-Swift.h"

@implementation RNRichText

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(Show:(nonnull NSDictionary *)props onDone:(RCTResponseSenderBlock)onDone onCancel:(RCTResponseSenderBlock)onCancel) {

    dispatch_async(dispatch_get_main_queue(), ^{
        NSString *content = [props objectForKey: @"content"];
        
        EditorDemoController *controller = [[EditorDemoController alloc] initWithSampleHTML:content wordPressMode:TRUE];
        
        id<UIApplicationDelegate> app = [[UIApplication sharedApplication] delegate];
        UINavigationController *rootViewController = ((UINavigationController*) app.window.rootViewController);

        if (rootViewController.presentedViewController) {
            [rootViewController.presentedViewController presentViewController:controller animated:YES completion:nil];
            return;
        }

        [rootViewController presentViewController:controller animated:YES completion:nil];
    });
}

@end
  
