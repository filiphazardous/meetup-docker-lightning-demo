<?php


namespace Drupal\demo_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Demo* Block.
 *
 * @Block(
 *    id = "demo_block",
 *    admin_label = @Translation("Demo block"),
 *    category = @Translation("Demo"),
 * )
 */

class DemoBlock extends BlockBase {
  public function build() {
    $uid = \Drupal::currentUser()->id();
    $build = array(
        '#type' => 'markup',
        '#attached' => array(
            'library' => array(
                'demo_block/demo-block-js',
            ),
        ),
        '#markup' => "<div id='demo-block' data-uid='$uid'><h1>Hello user $uid!</h1></div>",
    );

    return $build;
  }
}
